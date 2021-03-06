package com.google.sps.data;

/** An item on a todo list. */
public final class Comment {

  private final String text;
  private final long id;
  private final long timestamp;

  public Comment(long id, String text, long timestamp) {
    this.id = id;
    this.text = text;
    this.timestamp = timestamp;
  }
}